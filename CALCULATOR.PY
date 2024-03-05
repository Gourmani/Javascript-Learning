a=input("Enter the 1st number: ")
b=input("Enter the 2nd number: ")
operator=input("operator +, -, *, /, % : ")

if operator== "+":
    print(int(a)+int(b))

elif operator== "-"   :
    print(int(a)-int(b))

elif operator=="*" :
    print(int(a)*int(b))

elif operator=="/":
    print(int(a)/int(b))

else:
    print(int(a)%int(b)  )  

print("Calculator")    