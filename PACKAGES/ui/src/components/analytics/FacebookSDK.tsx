'use client';

import Script from 'next/script';
import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

interface FacebookSDKProps {
    appId?: string | undefined;
    pixelId?: string | undefined;
    debug?: boolean;
}

export const FacebookSDK = ({ appId, pixelId }: FacebookSDKProps) => {
    const pathname = usePathname();
    const searchParams = useSearchParams();

    useEffect(() => {
        if (pixelId) {
            // Track page views on route changes
            if (typeof window !== 'undefined' && (window as any).fbq) {
                (window as any).fbq('track', 'PageView');
            }
        }
    }, [pathname, searchParams, pixelId]);

    if (!appId && !pixelId) return null;

    return (
        <>
            <Script id="fb-sdk" strategy="afterInteractive">
                {`
          window.fbAsyncInit = function() {
            FB.init({
              appId      : '${appId || ""}',
              cookie     : true,
              xfbml      : true,
              version    : 'v19.0'
            });
              
            FB.AppEvents.logPageView();   

            FB.getLoginStatus(function(response) {
              if (window.onFacebookLoginStatus) {
                window.onFacebookLoginStatus(response);
              }
              console.log('Facebook Login Status:', response);
            });
          };

          (function(d, s, id){
             var js, fjs = d.getElementsByTagName(s)[0];
             if (d.getElementById(id)) {return;}
             js = d.createElement(s); js.id = id;
             js.src = "https://connect.facebook.net/en_US/sdk.js";
             fjs.parentNode.insertBefore(js, fjs);
           }(document, 'script', 'facebook-jssdk'));
        `}
            </Script>

            {pixelId && (
                <Script id="fb-pixel" strategy="afterInteractive">
                    {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${pixelId}');
            fbq('track', 'PageView');
          `}
                </Script>
            )}
        </>
    );
};
