import {View, Text, Button, StyleSheet} from 'react-native';
import {useState} from 'react';
import {useCameraPermissions, CameraView } from 'expo-camera';


export default function CaptureScreen(){

    const [permission, requestPermission] = useCameraPermissions();

    const [facing, setFacing] = useState<'front' | 'back'>('front');

    function toggleCameraFacing() {
    setFacing(current => (current === 'back' ? 'front' : 'back'));
  }

    if(!permission){
        return <View/>;
    }

    if(!permission.granted){
        return(
        <View>
            <Text>We need Permission</Text>
            <Button onPress={requestPermission} title="Grant permission"/>
        </View>
        )
    }

    return (
        <View style={styles.container}>
            <CameraView style={styles.camera} facing={facing}>
                <View>
                    <Button onPress={toggleCameraFacing} title="Flip Camera"/>
                </View>
            </CameraView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: '#211e1e',
},
camera: {
   flex: 1
  },
});