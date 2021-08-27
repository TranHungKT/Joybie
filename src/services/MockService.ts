import apiSauce from 'apisauce';

const create = (baseURL = 'https://61206a2924d11c001762ec44.mockapi.io/') => {
  const api = apiSauce.create({
    baseURL,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache',
    },
    timeout: 30000,
  });

  const getUsersRequest = () => api.get('users');

  const getChallengesRequest = () => api.get('challenges');

  const getRewardsRequest = () => api.get('rewards');

  const getVideosRequest = () => api.get('videos');

  return {
    getUsersRequest,
    getChallengesRequest,
    getRewardsRequest,
    getVideosRequest,
  };
};

export default {
  create,
};
