import { View, Text, StyleSheet } from 'react-native';
import { BRAND_NAME } from '@mittise/ui';

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{BRAND_NAME}</Text>
      <Text style={styles.subtitle}>Wellness starts here</Text>
      <View style={styles.badge}>
        <Text style={styles.badgeText}>Mobile Platform</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0fdf4',
  },
  title: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#166534',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 20,
    color: '#15803d',
    marginBottom: 24,
  },
  badge: {
    backgroundColor: '#16a34a',
    paddingHorizontal: 24,
    paddingVertical: 8,
    borderRadius: 999,
  },
  badgeText: {
    color: '#ffffff',
    fontSize: 16,
  },
});
