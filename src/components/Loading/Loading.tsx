import { StyleSheet, View } from 'react-native';
import React, { FC } from 'react';
import { ActivityIndicator } from 'react-native-paper';
import { colors } from '../../styles/colors';

interface Props {
  loading?: boolean;
}

export const Loading: FC<Props> = ({ loading = true }) => {
  return (
    <>
      {loading && (
        <View style={styles.loadingContainer} testID="loading-indicator">
          <ActivityIndicator size="large" color={colors.orange} />
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  loadingContainer: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});
