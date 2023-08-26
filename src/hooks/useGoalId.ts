import {RouteProp, useRoute} from '@react-navigation/native';
import {HomeStackParamList} from '../components/navigators/HomeStackNavigator';

export function useGoalId() {
  const {
    params: {id},
  } = useRoute<RouteProp<HomeStackParamList, 'EditGoal'>>();

  return id;
}
