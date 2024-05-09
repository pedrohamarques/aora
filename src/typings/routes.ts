export enum TAB_ROUTES {
    HOME = "Home",
    CREATE = "Create",
    BOOKMARK = "Bookmark",
    PROFILE = "Profile",
}

export enum PUBLIC_ROUTES {
    ONBOARDING = "Onboarding",
    SIGN_IN = "SignIn",
    SIGN_UP = "SignUp",
}

export type TabRoutesParams = {
    [TAB_ROUTES.HOME]: undefined;
    [TAB_ROUTES.CREATE]: undefined;
    [TAB_ROUTES.BOOKMARK]: undefined;
    [TAB_ROUTES.PROFILE]: undefined;
};

export type PublicRoutesParam = {
    [PUBLIC_ROUTES.ONBOARDING]: undefined;
    [PUBLIC_ROUTES.SIGN_IN]: undefined;
    [PUBLIC_ROUTES.SIGN_UP]: undefined;
};
