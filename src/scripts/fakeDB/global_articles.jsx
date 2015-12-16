// roles:
// 0 = all users
// 1 = org stewards
// 2 = center stewards

module.exports = [
  {
    priority: 1,
    name: 'Getting Started',
    groupRole: 0,
    articles: [
      {
        name: 'Getting Started with OZONE',
        file: 'OZONE_overview',
        film: true,
        role: 0
      },
      {
        name: 'Understanding HUD',
        file: 'HUD_overview',
        film: true,
        role: 0
      },
      {
        name: 'Understanding Center',
        file: 'Center_overview',
        film: true,
        role: 0
      },
      {
        name: 'Understanding Webtop',
        file: 'Webtop_overview',
        film: true,
        role: 0
      }
    ]
  },
  {
    priority: 2,
    name: 'Toolbar',
    groupRole: 0,
    articles: [
      {
        name: 'Using the Toolbar',
        file: 'GlobalToolbar_overview',
        film: true,
        role: 0
      },
      {
        name: 'Receive and Dismiss Notifications',
        file: 'GlobalToolbar_notifications',
        film: false,
        role: 0
      },
      {
        name: 'Navigate with the Menu',
        file: 'GlobalToolbar_mainMenu',
        film: false,
        role: 0
      }
    ]
  },
  {
    priority: 3,
    name: 'Webtop',
    groupRole: 0,
    articles: [
      {
        name: 'Using Webtop',
        file: 'Webtop_useWebtop',
        film: true,
        role: 0
      },
      {
        name: 'Add Listings to a Dashboard',
        file: 'Webtop_addListing',
        film: true,
        role: 0
      },
      {
        name: 'Create a Dashboard',
        file: 'Webtop_dashboards_create',
        film: true,
        role: 0
      },
      {
        name: 'Edit or Delete a Dashboard',
        file: 'Webtop_dashboards_edit',
        film: false,
        role: 0
      },
      {
        name: 'Navigate with the Webtop Toolbar',
        file: 'Webtop_lower_toolbar',
        film: false,
        role: 0
      }
    ]
  },
  {
    priority: 4,
    name: 'Center',
    groupRole: 0,
    articles: [
      {
        name: 'Search for Listings',
        file: 'Center_search',
        film: true,
        role: 0
      },
      {
        name: 'Viewing Listings',
        file: 'Center_listings_overview',
        film: false,
        role: 0
      },
      {
        name: 'Create a Listing',
        file: 'Center_listings_create',
        film: true,
        role: 0
      },
      {
        name: 'Edit a Listing',
        file: 'Center_listings_edit',
        film: false,
        role: 0
      },
      {
        name: 'Review a Listing',
        file: 'Center_listings_reviews',
        film: true,
        role: 0
      },
      {
        name: 'Manage your Created Listings',
        file: 'Center_listingManagementPage_user',
        film: false,
        role: 0
      }
    ]
  },
  {
    priority: 5,
    name: 'HUD',
    groupRole: 0,
    articles: [
      {
        name: 'Using HUD',
        file: 'HUD_useHUD',
        film: true,
        role: 0
      },
      {
        name: 'Group Bookmarked Listings by Folder',
        file: 'HUD_groupListings',
        film: false,
        role: 0
      }
    ]
  },
  {
    priority: 6,
    name: 'Administration',
    groupRole: 1,
    articles: [
      {
        name: 'Manage Listings as an Org Steward',
        file: 'Center_listingManagementPage_orgSteward',
        film: false,
        role: 1
      },
      {
        name: 'Approve or Return a Listing as an Org Steward',
        file: 'Center_listings_approveReject_orgSteward',
        film: false,
        role: 1
      },
      {
        name: 'The Role of Center Steward',
        file: 'Center_steward_overview',
        film: false,
        role: 2
      },
      {
        name: 'Send a Notification',
        file: 'Center_steward_settings_notifications',
        film: false,
        role: 2
      },
      {
        name: 'Manage Listings as a Center Steward',
        file: 'Center_listingManagementPage_centerSteward',
        film: false,
        role: 2
      },
      {
        name: 'Approve or Return a Listing as a Center Steward',
        file: 'Center_listings_approveReject_centerSteward',
        film: false,
        role: 2
      },
      {
        name: 'Feature a Listing',
        file: 'Center_steward_featureFlag',
        film: false,
        role: 2
      },
      {
        name: 'Change Center Settings',
        file: 'Center_steward_settings',
        film: false,
        role: 2
      },
      {
        name: 'Manage Center Categories',
        file: 'Center_steward_settings_category',
        film: false,
        role: 2
      },
      {
        name: 'Manage Contact Types',
        file: 'Center_steward_settings_contactType',
        film: false,
        role: 2
      },
      {
        name: 'Manage Intents',
        file: 'Center_steward_settings_intent',
        film: false,
        role: 2
      },
      {
        name: 'Manage Organizations',
        file: 'Center_steward_settings_org',
        film: false,
        role: 2
      },
      {
        name: 'Manage Stewards',
        file: 'Center_steward_settings_steward',
        film: false,
        role: 2
      }
    ]
  }
];
