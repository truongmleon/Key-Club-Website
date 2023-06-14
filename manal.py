#Part 2

#Equation 1
import math

a=1
b=-2
c=-35

def plusRoot(a,b,c):
    d= math.sqrt((b**2)-(4*a*c))
    x= (-b+d)/(2*a)
    return x


def negRoot(a,b,c):
    d= math.sqrt((b**2)-(4*a*c))
    y=(-b-d)/(2*a)
    return y

print(a,"x^2-",b,"x+",c,"=0")
PosAns=plusRoot(a,b,c)
NegAns=negRoot(a,b,c)
print("Postive root is",PosAns,"The Negative root is", NegAns)

#Equation 2

a=4
b=-24
c=35

print(a,"x^2-",b,"x+",c,"=0")
PosAns=plusRoot(a,b,c)
NegAns=negRoot(a,b,c)
print("Postive root is",PosAns,"The Negative root is", NegAns)