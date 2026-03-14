'use client';

import { useEffect, useRef } from 'react';

interface FacebookLoginButtonProps {
    scope?: string;
    onLogin?: (response: any) => void;
    className?: string;
    size?: 'small' | 'medium' | 'large' | 'xlarge' | 'icon';
    width?: string;
    layout?: 'rounded' | 'button' | 'icon';
    autoLogoutLink?: boolean;
    useContinueAs?: boolean;
}

export const FacebookLoginButton = ({
    scope = 'public_profile,email',
    onLogin,
    className,
    size = 'large',
    width,
    layout = 'rounded',
    autoLogoutLink = false,
    useContinueAs = false,
}: FacebookLoginButtonProps) => {
    const buttonRef = useRef<HTMLDivElement>(null);
    const callbackId = useRef(`fb_login_cb_${Math.random().toString(36).substr(2, 9)}`);

    useEffect(() => {
        // Register the global callback that the XFBML button will call
        if (onLogin) {
            (window as any)[callbackId.current] = () => {
                if ((window as any).FB) {
                    (window as any).FB.getLoginStatus((response: any) => {
                        onLogin(response);
                    });
                }
            };
        }

        // Reparse XFBML to render the button
        if ((window as any).FB && buttonRef.current) {
            (window as any).FB.XFBML.parse(buttonRef.current.parentElement);
        }

        return () => {
            // Cleanup global callback
            delete (window as any)[callbackId.current];
        };
    }, [onLogin]);

    return (
        <div className={className} ref={buttonRef}>
            <div
                className="fb-login-button"
                data-width={width}
                data-size={size}
                data-button-type="login_with"
                data-layout={layout}
                data-auto-logout-link={autoLogoutLink}
                data-use-continue-as={useContinueAs}
                data-scope={scope}
                data-onlogin={`${callbackId.current}();`}
            ></div>
        </div>
    );
};
