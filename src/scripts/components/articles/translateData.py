
import fnmatch, os, re, shutil

includes = ['*.sanitized'] # for files only
excludes = ['/Doc_images'] # for dirs and files

# transform glob patterns to regular expressions
includes = r'|'.join([fnmatch.translate(x) for x in includes])
excludes = r'|'.join([fnmatch.translate(x) for x in excludes]) or r'$.'

if os.path.exists('./sanitized'):
    print '\nremoving old sanitized directory'
    shutil.rmtree('./sanitized')

print '\nmaking new sanitized directory'
os.makedirs('./sanitized')

print '\nsanitizing files...'

for filename in os.listdir('./'):
    if filename.endswith('.html'):

        activefile = open(filename, 'r').read()
        if '<body>' in activefile:
            print '\nfound body tag in ' + filename + ' removing...'
            outfile = open('./sanitized/' +filename.replace('.html', '.sanitized'), 'w')
            outfile.write(activefile.split('<body>')[1].split('</body>')[0])

        else:
            outfile = open('./sanitized/' + filename.replace('.html', '.sanitized'), 'w')
            outfile.write(activefile)

print '\ndone sanitizing'

if os.path.exists('./jsxDocs'):
    print '\nremoving old jsxDocs directory'
    shutil.rmtree('./jsxDocs')

print '\nmaking new jsxDocs directory'
os.makedirs('./jsxDocs')

for root, dirs, files in os.walk('./sanitized'):

    # exclude dirs
    dirs[:] = [os.path.join(root, d) for d in dirs]
    dirs[:] = [d for d in dirs if not re.match(excludes, d)]

    # exclude/include files
    files = [os.path.join(root, f) for f in files]
    files = [f for f in files if not re.match(excludes, f)]
    files = [f for f in files if re.match(includes, f)]

    # loop through our documentation files
    for fname in files:
        print '\n\nparsing ' + fname

        # create a .jsx counterpart to the html docs
        newfilename = fname.split('./sanitized/').pop().replace('.sanitized', '.jsx')

        print 'creating new jsx file ' + newfilename
        shutil.copyfile(fname, './jsxDocs/' + newfilename)

        # append the react component declaration
        with file('./jsxDocs/' + newfilename, 'r') as original: data = original.read()

        # inject the old HTML contents
        with file('./jsxDocs/' + newfilename, 'w') as modified: modified.write("// Automatically Generated Module\nvar React = require('react');\nmodule.exports = React.createClass({\nrender: function(){\n<div>\n\n" + data)

        # close the react component declaration
        with open('./jsxDocs/' + newfilename, "a") as newModule:
            newModule.write("\n\n</div>\n);\n}\n});\n")
