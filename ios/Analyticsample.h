
#ifdef RCT_NEW_ARCH_ENABLED
#import "RNAnalyticsampleSpec.h"

@interface Analyticsample : NSObject <NativeAnalyticsampleSpec>
#else
#import <React/RCTBridgeModule.h>

@interface Analyticsample : NSObject <RCTBridgeModule>
#endif

@end
