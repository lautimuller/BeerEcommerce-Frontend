import React, { FC, ReactNode } from 'react';
import { StyleSheet, View } from 'react-native';
import { Loading } from '../Loading/Loading';

interface Props {
  /**
   * Flag to indicate whether the loading state may be shown or not
   */
  loading: boolean;

  /**
   * to show a custom loading component
   */
  loadingComponent?: ReactNode;

  /**
   * Flag to indicate whether the failure state may be shown or not (optional)
   * Default: false
   */
  error?: boolean;

  /**
   * Component to be rendered when data is retrieved successfully
   */
  children: ReactNode;

  /**
   * Component to be rendered when data retrieval fails, error flag must be true (optional)
   * Default: undefined
   */
  failure?: ReactNode | null;
}

export const StatefulWrapper: FC<Props> = ({
  loading,
  loadingComponent,
  error = false,
  children,
  failure = undefined,
}) => {
  return (
    <>
      {loading && (
        <View style={styles.flexView} testID="loading">
          {loadingComponent ?? <Loading />}
        </View>
      )}
      {!loading && error && failure && (
        <View style={styles.flexView} testID="error">
          {failure}
        </View>
      )}
      {!loading && !error && (
        <View style={styles.flexView} testID="success">
          {children}
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  flexView: { flex: 1 },
});
