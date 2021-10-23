import React, { ReactElement } from 'react';

import MediaProvider from './media/media';

interface IProps {
    children: ReactElement[] | ReactElement;
    serverProps: {
        width: number;
    };
}

const RootProvider = ({ serverProps, children }: IProps): ReactElement => (
    <MediaProvider width={serverProps.width}>{children}</MediaProvider>
);

export default RootProvider;
