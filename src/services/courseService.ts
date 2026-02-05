import api from './api';

export const getMyCourses = async () => {
    const response = await api.get('/my-courses');
    
    return response.data;
}

export const getMyCourseDetails = async (courseId: string) => {
    const response = await api.get(`/my-course/${courseId}/details`);
}