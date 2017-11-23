/******************************************
 Tehtävä: Harjoitus 20 (Palautus vko 47)
 Tekija: Sklyarov Dmitry
 
 Kuvaus:
 Kuten harjoitus 19, mutta toteuta kayttaen taulukkoa ja osoitinta
 tiedon käsittelyyn
 
 Pvm: 23.11.2017
 Versio: 1.0
 ******************************************/

#include <iostream>
using namespace std;
int main()
{
    int nopeus[5] = { 0,0,0,0,0 };
    int *osoitin;
    osoitin = &nopeus[0];
    int i = 0;
    while (true)
    {
        cout << "Anna nopeus: " << endl;
        cin >> osoitin[i];
        if (osoitin[i] < 0)
            break;
        cout << (osoitin[0] + osoitin[1] + osoitin[2] + osoitin[3] + osoitin[4]) / 5;
        i++;
        if (i > 4)
            i = 0;
    }
    return 0;
}
