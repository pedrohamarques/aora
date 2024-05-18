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
    SUCCESS_SIGN_UP = "SuccessSignUp",
}

export enum HOME_STACK_ROUTES {
    HOME = "Home",
    SEARCH = "Search",
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
    [PUBLIC_ROUTES.SUCCESS_SIGN_UP]: {
        email: string;
        password: string;
    };
};

export type HomeStackRoutesParams = {
    [HOME_STACK_ROUTES.HOME]: undefined;
    [HOME_STACK_ROUTES.SEARCH]: {
        search: string;
    };
};
