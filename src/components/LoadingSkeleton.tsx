import React from 'react';
import { Image, Text } from 'react-native';
import { View } from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

const LoadingSkeleton = () => {
    return (
        <SkeletonPlaceholder>
            <SkeletonPlaceholder.Item flexDirection="column" alignItems="flex-start">
                {/* <SkeletonPlaceholder.Item width={60} height={60} borderRadius={50} /> */}
                <SkeletonPlaceholder.Item marginLeft={20}>
                    <SkeletonPlaceholder.Item width={120} height={20} />
                    <SkeletonPlaceholder.Item marginTop={6} width={80} height={20} />
                </SkeletonPlaceholder.Item>
            </SkeletonPlaceholder.Item>
        </SkeletonPlaceholder >
    );
};
export default LoadingSkeleton;