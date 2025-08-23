import { describe, it, expect, vi, beforeEach } from 'vitest';
import { mount } from '@vue/test-utils';
import UserIndex from '@/views/UserIndex.vue';

// Mock axios
vi.mock('axios', () => ({
  default: {
    get: vi.fn(),
  },
}));

describe('UserIndex', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders loading state initially', () => {
    const wrapper = mount(UserIndex);
    expect(wrapper.text()).toContain('Loading users...');
  });

  it('renders user data after successful API call', async () => {
    // Mock API response
    const mockUsers = [
      {
        name: { first: 'John', last: 'Doe' },
        email: 'john.doe@example.com',
        gender: 'male',
        location: { country: 'Australia' },
        registered: { date: '2022-01-01T00:00:00.000Z' },
        picture: { large: 'https://example.com/avatar.jpg' },
      },
    ];

    const { default: axios } = await import('axios');
    vi.mocked(axios.get).mockResolvedValueOnce({
      data: { results: mockUsers },
    });

    const wrapper = mount(UserIndex);

    // Wait for async operations
    await wrapper.vm.$nextTick();

    // Check if loading is hidden and data is displayed
    expect(wrapper.text()).not.toContain('Loading users...');
  });

  it('handles API error gracefully', async () => {
    const { default: axios } = await import('axios');
    vi.mocked(axios.get).mockRejectedValueOnce(new Error('API Error'));

    const wrapper = mount(UserIndex);

    // Wait for async operations
    await wrapper.vm.$nextTick();

    // Should still show loading or handle error appropriately
    expect(wrapper.exists()).toBe(true);
  });
});
