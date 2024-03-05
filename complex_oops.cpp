#include<bits/stdc++.h>
using namespace std;

class complexN{
    int a,b;
    friend complexN sum(complexN o1,complexN o2);
    public:
    void setdata(int n1,int n2){
        a=n1;
        b=n2;
    }
    void printdata(){
        cout<<"the data is "<<a<<"+"<<b<<"i"<<endl;
    }

};

complexN sum(complexN o1,complexN o2){
     complexN o3;
     o3.setdata((o1.a + o2.a), (o1.b+o2.b));
     return o3;
}

int main(){

    complexN c1,c2,c3;
    c1.setdata(1,2);
    c1.printdata();
    c2.setdata(3,4);
    c2.printdata();
    c3=sum(c1, c2);
    c3.printdata();
}
