import { SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function AppGradient({
    children,
    colors,
}: {
    children: any;
    colors: string[];
}) {
    return (
        <LinearGradient colors={colors} className='flex-1 px-5'>
            <SafeAreaView className='flex-1 px-5 py-3'>{children}</SafeAreaView>
        </LinearGradient>
    );
}
