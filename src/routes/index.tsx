import { useContext } from "react";

import { AuthContext } from "@contexts/auth-provider";

import LoadingScreen from "@screens/loading";

import { PublicNavigation } from "./public-navigation";
import { TabNavigation } from "./tab-navigation";

export default function Routes() {
    const { user } = useContext(AuthContext);

    if (user === null) {
        return <LoadingScreen />;
    } else if (user === false) {
        return <PublicNavigation />;
    }

    return <TabNavigation />;
}
