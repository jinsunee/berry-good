import {useQuery} from '@tanstack/react-query';
import {useRecoilValue} from 'recoil';
import {useGoalId} from '../../../../hooks/useGoalId';
import {userAtom} from '../../../../states';

export const goalQueryKey = 'goal';

export function useGoal() {
  const user = useRecoilValue(userAtom);
  const goalId = useGoalId();

  const {data, ...rest} = useQuery([goalQueryKey, user, goalId], async () => {
    // const goalsSnapshot = await firestore()
    //   .collection('goals')
    //   .doc(goalId)
    //   .get();

    // const goal = goalsSnapshot.data() as Goal;
    // goal.id = goalsSnapshot.id;

    return {
      id: '123',
      title: '스쿼트 하루에 50개',
      imgs: [
        'https://blog.kakaocdn.net/dn/n49QI/btruAjcdCkA/R3xQ3dELu5GwrdZWOGrZY1/img.png',
      ],
      days: [0, 1, 2, 3, 4, 5, 6],
      startAt: new Date('2023-08-01'),
      endAt: new Date('2023-10-31'),
    };

    // return goal;
  });

  return {data, ...rest};
}
