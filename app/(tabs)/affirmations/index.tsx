import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import AppGradient from '@/components/AppGradient';
import AFFIRMATION_GALLERY from '@/constants/affirmation-gallery';
import GuidedAffirmationsGallery from '@/components/GuidedAffirmationsGallery';

export default function Affirmations() {
    return (
        <View className='flex-1'>
            <AppGradient colors={['#2E1F58', '#54426B', '#A790AF']}>
                <ScrollView>
                    <Text className='text-zinc-50 text-3xl font-bold'>
                        Change your beliefs with affirmations
                    </Text>
                    <View>
                        {AFFIRMATION_GALLERY.map((category) => (
                            <GuidedAffirmationsGallery
                                key={category.title}
                                title={category.title}
                                previews={category.data}
                            />
                        ))}
                    </View>
                </ScrollView>
            </AppGradient>
        </View>
    );
}
