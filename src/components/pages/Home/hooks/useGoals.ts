import firestore from '@react-native-firebase/firestore';
import {useQuery} from '@tanstack/react-query';
import {useRecoilValue} from 'recoil';
import {userAtom} from '../../../../states';
import {Goal} from '../../../../types';

export const goalsQueryKey = 'goals';

export function useGoals() {
  const user = useRecoilValue(userAtom);
  const {data, ...rest} = useQuery([goalsQueryKey, user], async () => {
    const goalsSnapshot = await firestore()
      .collection('goals')
      .where('userId', '==', user?.id)
      .get();

    const rtn = goalsSnapshot.docs.map(doc => {
      const goal = doc.data() as Goal;
      goal.id = doc.id;

      return goal;
    });

    rtn.push({
      id: '123',
      title: '스쿼트 하루에 50개',
      imgs: [],
      days: [0, 1, 2, 3, 4, 5, 6],
      startAt: '2021-01-01',
      endAt: null,
    });

    return rtn;
  });

  return {data, ...rest};
}
