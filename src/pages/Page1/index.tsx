import React, { memo, useCallback } from 'react';
import { useSnackbar } from 'notistack';

export const Page1Component: React.FC = () => {
  const { enqueueSnackbar } = useSnackbar();

  const showNotification = useCallback(() => {
    enqueueSnackbar('This is a notification message');
  }, [enqueueSnackbar]);

  return (
    <div>
      <p>Page1</p>
      <button onClick={showNotification}>Show notification!</button>
    </div>
  );
};

const Page1 = memo(Page1Component);
Page1.displayName = 'Page1';

export default Page1;
