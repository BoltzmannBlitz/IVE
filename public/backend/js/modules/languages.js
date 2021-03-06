var app = angular.module("languages", []);

/**
 * Translate Provider
 */
app.config(function($translateProvider, config) {

    /**
     * German
     */
    $translateProvider.translations('de_DE', {
        // TODO: translations
    });


    /**
     * English
     */
    $translateProvider.translations('en_US', {

        SCENARIO: 'scenario',
        SCENARIOS: 'scenarios',
        _SCENARIO: 'Scenario',
        _SCENARIOS: 'Scenarios',
        LOCATION: 'location',
        LOCATIONS: 'locations',
        _LOCATION: 'Location',
        _LOCATIONS: 'Locations',
        VIDEO: 'video',
        VIDEOS: 'videos',
        _VIDEO: 'Video',
        _VIDEOS: 'Videos',
        OVERLAY: 'overlay',
        OVERLAYS: 'overlays',
        _OVERLAY: 'Overlay',
        _OVERLAYS: 'Overlays',
        RELATIONSHIP: 'relationship',
        RELATIONSHIPS: 'relationships',
        _RELATIONSHIP: 'Relationship',
        _RELATIONSHIPS: 'Relationships',
        HELP: 'Help',
        LOGIN: 'Login',
        LOGOUT: 'Logout',
        SEARCH: 'Search',
        SEARCH_FOR: 'Search for',
        CREATE: 'Create',
        EDIT: 'Edit',
        DELETE: 'Delete',
        CANCEL: 'Cancel',
        CLOSE: 'Close',
        SEND: 'Send',
        DEFAULT: 'Default',
        ALL: 'All',
        USERNAME: 'Username',
        PASSWORD: 'Password',
        PROPERTIES: 'Properties',
        ID: 'ID',
        EXPORT_ID: 'Export/Import-ID',
        NAME: 'Name',
        DESCRIPTION: 'Description',
        CREATED: 'Created',
        LAST_UPDATED: 'Last updated',
        SHOW: 'Show',
        HIDE: 'Hide',
        RELATED: 'related',
        NO: 'No',
        CONNECTED: 'connected',
        ABSTRACT: 'abstract',
        INDOOR: 'indoor',
        OUTDOOR: 'outdoor',
        LONGITUDE: 'Longitude',
        LATITUDE: 'Latitude',
        LOCATION_TYPE: 'Location type',
        RECORDED: 'Recorded',
        CATEGORY: 'Category',
        URL: 'URL',
        TYPE: 'Type',
        EXAMPLE: 'Example',
        WEBSITE: 'website',
        PICTURE: 'picture',
        WIDTH: 'Width',
        HEIGHT: 'Height',
        DISTORTION: 'Distortion',
        TRANSLATION: 'Translation',
        ROTATION: 'Rotation',
        AXIS: 'Axix',
        DISPLAY: 'Display',
        PREFERRED: 'Preferred',
        FILTER: 'Filter',
        BY: 'by',
        START_LOCATION: 'Start location',
        END_LOCATION: 'End location',
        CHILD_LOCATION: 'Child location',
        PARENT_LOCATION: 'Parent location',
        CREATE_NEW: 'Create new',
        SELECT_A_NEW: 'Select a new',
        OPEN_PREVIEW_MODE: 'Open preview mode',
        ARE_YOU_SURE_YOU_WANT_TO_DELETE_THIS: 'Are you sure that you want to delete this',
        PLEASE_TYPE_IN_THE_NAME_OF_THE: 'Please type in the name of the',
        PLEASE_TYPE_IN_THE_TYPE_OF_THIS: 'Please type in the type of the',
        TO_CONFIRM: 'to confirm',

    });


    // Set Default Language
    $translateProvider.preferredLanguage(config.appLanguage);
    $translateProvider.useSanitizeValueStrategy('sanitize');
});
