import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

interface CustomButtonProps {
    onPress: () => void;
    title: string;
    textStyles?: string;
    containerStyles?: string;
}

export default function CustomButton({
    onPress,
    title,
    textStyles = '',
    containerStyles = '',
}: CustomButtonProps) {
    return (
        <TouchableOpacity
            activeOpacity={0.7}
            className={`bg-white rounded-full min-h-[62px] justify-center items-center ${containerStyles}`}
            onPress={onPress}
        >
            <Text className={`font-semibold text-lg ${textStyles}`}>
                {title}
            </Text>
        </TouchableOpacity>
    );
}
