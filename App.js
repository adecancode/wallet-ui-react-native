import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from 'react-native';
import Constants from 'expo-constants';

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={{ fontSize: 20, fontWeight: '700' }}>Dashboard</Text>
        <Image
          style={styles.profile}
          source={{
            uri: 'https://picsum.photos/200/300',
          }}
        />
      </View>
      <View style={styles.balsection}>
        <Text
          style={{
            textAlign: 'center',
            color: '#adb5bd',
            fontSize: 17,
            fontWeight: '500',
          }}>
          Total Balance
        </Text>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 32,
            fontWeight: 'bold',
            marginTop: 10,
          }}>
          NGN 36,000,000
        </Text>
      </View>
      <View style={styles.feasection}>
        <TouchableOpacity style={styles.feaicons}>
          <Text style={{ color: '#fff', fontWeight: '700', textAlign: 'center' }}>Transfer</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.feaicons}>
          <Text style={{ color: '#fff', fontWeight: '700', textAlign: 'center' }}>Top-Up</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.feaicons}>
          <Text style={{ color: '#fff', fontWeight: '700', textAlign: 'center' }}>Pay Bill</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.transec}>
        <Text
          style={{
            fontSize: 17,
            fontWeight: 'bold',
            marginBottom: 20
          }}>
          Transactions
        </Text>
        <View style={{ marginTop: 10, marginBottom: 10, padding: 20, backgroundColor: '#FEF2F2', borderRadius: 15 }}>
          <View style={styles.toptranshead}>
            <Text style={{ fontSize: 18, fontWeight: '600', color: '#EF4444' }}>Airtime</Text>
            <Text style={{ fontSize: 18, fontWeight: '600', color: '#EF4444' }}>NGN 1,000</Text>
          </View>
          <View style={styles.toptranshead}>
            <Text style={{ fontSize: 16, color: '#6B7280' }}>Jan 3</Text>
            <Text style={{ fontSize: 16, color: '#6B7280' }}>+2348023452345</Text>
          </View>
        </View>
        <View style={{ marginTop: 10, marginBottom: 10, padding: 20, backgroundColor: '#ECFDF5', borderRadius: 15 }}>
          <View style={styles.toptranshead}>
            <Text style={{ fontSize: 18, fontWeight: '600', color: '#10B981' }}>Tech Funds</Text>
            <Text style={{ fontSize: 18, fontWeight: '600', color: '#10B981' }}>NGN 4,000,000</Text>
          </View>
          <View style={styles.toptranshead}>
            <Text style={{ fontSize: 16, color: '#6B7280' }}>Dec 26</Text>
            <Text style={{ fontSize: 16, color: '#6B7280' }}>Onii</Text>
          </View>
        </View>
        <View style={{ marginTop: 10, marginBottom: 10, padding: 20, backgroundColor: '#ECFDF5', borderRadius: 15 }}>
          <View style={styles.toptranshead}>
            <Text style={{ fontSize: 18, fontWeight: '600', color: '#10B981' }}>Tech Funds</Text>
            <Text style={{ fontSize: 18, fontWeight: '600', color: '#10B981' }}>NGN 1,000,500</Text>
          </View>
          <View style={styles.toptranshead}>
            <Text style={{ fontSize: 16, color: '#6B7280' }}>Dec 25</Text>
            <Text style={{ fontSize: 16, color: '#6B7280' }}>Anon</Text>
          </View>
        </View>
        <View style={{ marginTop: 10, marginBottom: 10, padding: 20, backgroundColor: '#FEF2F2', borderRadius: 15 }}>
          <View style={styles.toptranshead}>
            <Text style={{ fontSize: 18, fontWeight: '600', color: '#EF4444' }}>Airtime</Text>
            <Text style={{ fontSize: 18, fontWeight: '600', color: '#EF4444' }}>NGN 2,500</Text>
          </View>
          <View style={styles.toptranshead}>
            <Text style={{ fontSize: 16, color: '#6B7280' }}>Dec 23</Text>
            <Text style={{ fontSize: 16, color: '#6B7280' }}>+2348000000009</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 1,
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: Constants.statusBarHeight,
    paddingLeft: 20,
    paddingRight: 20,
  },
  profile: {
    width: 40,
    height: 40,
    borderRadius: 9999,
  },
  balsection: {
    padding: 20,
    marginTop: 40,
  },
  feasection: {
    marginTop: 20,
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  feaicons: {
    borderRadius: 9999,
    backgroundColor: '#000000',
    paddingTop: 10,
    paddingBottom: 10,
    width: 100
  },
  transec: {
    marginTop: 40,
    padding: 20,
  },
  toptranshead: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 5,
    marginBottom: 5
  }
});
