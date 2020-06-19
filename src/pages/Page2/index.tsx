import React, { memo } from 'react';

export const Page2Component: React.FC = () => <div>Page2</div>;

const Page2 = memo(Page2Component);
Page2.displayName = 'Page2';

export default Page2;
