import { View, Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useLocalSearchParams } from 'expo-router';
import { GalleryPreviewData } from '@/constants/models/AffirmationCategory';
import AFFIRMATION_GALLERY from '@/constants/affirmation-gallery';

export default function AffirmationPractice() {
    const { itemId } = useLocalSearchParams();

    const [affirmation, setAffirmation] = useState<GalleryPreviewData>();

    useEffect(() => {
        for (let i = 0; i < AFFIRMATION_GALLERY.length; i++) {
            const affirmationData = AFFIRMATION_GALLERY[i].data;
            const initialAffirmation = affirmationData.find(
                (a) => a.id === Number(itemId)
            );
            if (initialAffirmation) {
                setAffirmation(initialAffirmation);
                return;
            }
        }
    }, []);

    return (
        <View className='flex-1'>
            <Text>AffirmationPractice</Text>
        </View>
    );
}
