//Azucena Marroquin
//atrevizo4@cnm.edu
//MarroquinP1



#include <iostream>
#include <iomanip>

using namespace std;

int main()
{

    //introductory part of project
    cout << "Azucena Marroquin\n"
         << "How many JellyBeans in a Jar? \n"
         << "Objective: to find out how many jellybeans fit in a cylinder. \n";

   //declaring variables and initializing some of the variables
   const double PI = 3.141592;
   double a = 5.0 / 8;
   double b = 1.0 / 4;
   double jellybean = (4.0 / 3) * PI * a * pow(b, 2);
   double height { 0.0 };
   double diameter { 0.0 };
   double wallThickness { 0.0 };
   double packingFactor = 0.20;

    //part of the program that asks the user for information regarding their cylindrical container
    cout << "\n Please enter the height of your cylindrical jar ";
    cin >> height;
    cout << "\n Please enter the diameter of your cylindrical jar ";
    cin >> diameter;
    cout << "\n Please enter the wall thickness of your cylindrical jar ";
    cin >> wallThickness;

   //setting the rest of the variables and initializing the uninitialzed variables from the first part of the program
   double radius = (diameter / 2) - wallThickness;
   double cylinderVolume = (PI * pow(radius, 2)) * height;
   double adjustedVolume = cylinderVolume - packingFactor;
   double totalJellybeans = adjustedVolume / jellybean;
  
    //printing out the overall dimentios of the jar 
    cout << "\n The jar dimensions are as follows: \n"
         << "\n Height: " << height
         << "\n Diameter: " << diameter
         << "\n Cylinder Wall Thickness: " << wallThickness 
         << "\n The Estimated Packing Factor is: " << packingFactor;

    //printing out the dimensions of the jar and jellybean and calculating the total of jellybeans that fit in a jar
    cout << "\n \n The jar volume is: " << cylinderVolume;
    cout << "\n The jar volume minus the estimated packing factor is: " << adjustedVolume;
    cout << "\n The jellybean axis a is: " << a;
    cout << "\n The jellybean axis b is: " << b;
    cout << "\n The jellybean volume is: " << jellybean;
    cout << "\n \nThe total of jellybeans that fit in your cylindrial jar are: " << fixed << setprecision(0) << totalJellybeans << endl;
   
 
        return 0;
}


