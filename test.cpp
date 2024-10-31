#include<bits/stdc++.h>

using namespace std;

int main(){


    int arr1[] = {1, 2, 3, 4, 4, 5};
    int arr2[] ={3, 4, 4, 5, 6, 7};
    int n1 = 6;
    int n2 = 6;


    unordered_set<int> st1;
    unordered_set<int> st2;

    for(int i = 0 ; i< n1 ; i++){
        st1.insert(arr1[i]);
    }

    for(int i =0 ; i< n2 ; i++){
        if(st1.count(arr2[i]))
            st2.insert(arr2[i]);
    }

    

    for(auto i : st2)
    {
        cout<<i<<" ";
    }

    return 0;
}