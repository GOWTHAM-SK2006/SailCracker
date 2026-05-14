export const BASE_URL = "https://dbchangesstudent.edwisely.com";

export const api = {
  async getLoginOtp(phoneNumber: string) {
    const response = await fetch(`${BASE_URL}/auth/getLoginOtp`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ phoneNumber }),
    });
    return response.json();
  },

  // Mock endpoints for dashboard
  async getDashboardData() {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 800));
    return {
      studentName: "Alex Chen",
      attendance: 88,
      courses: [
        { id: 1, name: "Advanced Robotics", progress: 72, grade: "A" },
        { id: 2, name: "Digital Ethics", progress: 89, grade: "A" },
        { id: 3, name: "Cybernetics", progress: 65, grade: "B" },
      ],
      upcomingExams: [
        { id: 1, name: "Robotics Midterm", date: "Oct 29", time: "10:00 AM", room: "C340" },
        { id: 2, name: "Ethics Final", date: "Nov 3", time: "02:00 PM", room: "D102" },
      ]
    };
  }
};
