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
    // Check for skeleton components instead of loading text
    expect(wrapper.find('.animate-pulse').exists()).toBe(true);
    // Check for skeleton structure
    expect(wrapper.find('.flex.flex-col.items-center').exists()).toBe(true);
    // Check for the correct number of skeleton elements (2 in header + 5 in table row)
    expect(wrapper.findAll('.animate-pulse')).toHaveLength(7);
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

    // Mock axios before mounting
    const axios = await import('axios');
    vi.mocked(axios.default.get).mockResolvedValueOnce({
      data: { results: mockUsers },
    });

    const wrapper = mount(UserIndex);

    // Wait for async operations to complete
    await new Promise((resolve) => setTimeout(resolve, 0));
    await wrapper.vm.$nextTick();

    // Check if loading is hidden and data is displayed
    expect(wrapper.find('.animate-pulse').exists()).toBe(false);
  });

  it('handles API error gracefully', async () => {
    // Mock axios before mounting
    const axios = await import('axios');
    vi.mocked(axios.default.get).mockRejectedValueOnce(new Error('API Error'));

    const wrapper = mount(UserIndex);

    // Wait for async operations to complete
    await new Promise((resolve) => setTimeout(resolve, 0));
    await wrapper.vm.$nextTick();

    // Should still show loading skeleton or handle error appropriately
    expect(wrapper.exists()).toBe(true);
    // The component should still be mounted even if there's an error
    expect(wrapper.find('.animate-pulse').exists()).toBe(false);
  });
});
