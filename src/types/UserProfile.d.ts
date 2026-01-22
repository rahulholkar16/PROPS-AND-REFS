interface UserProfile {
    user: {
        name: string,
        email: string,
        avatar: string,
        role: "Admin" | "Developer",
        status: "Active" | "Online" | "Offline",
        stats: {
            posts?: number,
            followers?: number,
            following?: number, 
            projects?: number,
            commits?: number,
            reviews?: number,
        }
    };
    actions: {
        primary: {
            label: string,
            onClick: () => void,
            className: string,
        },
        secondary: {
            label: string,
            onClick: () => void,
            className: string,
        },
    };
    theme: {
        backgroundColor: string,
        textColor: string,
        avatarBg: string,
        badgeBg: string,
    };
}

interface UserProfileCardProp extends UserProfile {
    key: number | string;
}