import React from 'react';
import UpdateCard from '../../../../components/UpdateCard';
import { useAppSelector } from '../../../../redux/HookRedux';

const UpdateScreen = () => {
  const { challenges } = useAppSelector((state) => state.challenges);
  return (
    <UpdateCard id={challenges[0].id} />
  );
};

export default UpdateScreen;
