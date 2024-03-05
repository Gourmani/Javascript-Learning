#include <bits/stdc++.h>
using namespace std;

int maxORSubarrayRemoval(vector<int>& arr) {
    int max_or = 0;
    for (int num : arr) {
        max_or |= num;
    }

    if (max_or == 0) {
        return arr.size();
    }

    return 0;
}

// Example usage
int main() {
    vector<int> arr = {1, 2, 3, 4}; // Replace with actual input array
    cout << maxORSubarrayRemoval(arr) << endl; // Output: 0
    return 0;
}
