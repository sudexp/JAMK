/******************************************
Tehtävä: Harjoitus 12 (Palautus vko 43)
Tekija: Sklyarov Dmitry
Kuvaus:
Tee ohjelma, joka kysyy käyttäjältä kokonaisluvun väliltä 1-9 ja
tulostaa vastauksen perusteella seuraavan kuvion (jos vastaus on 6):

1
22
333
4444
55555
666666

Jokainen numero tulee tulostaa toistorakenten avulla erikseen lauseella:
cout << rivinro;

Pvm: 29.9.2017
Versio: 1.0
******************************************/

#include <iostream> 
using namespace std;
int main(void)
{
    int luku;
    int luku1=1;
    int luku2=22;
    int luku3=333;
    int luku4=4444;
    int luku5=55555;
    int luku6=666666;
    int luku7=7777777;
    int luku8=88888888;
    int luku9=999999999;
    
    cout << "Syötä kokonaisluku väliltä 1-9." << endl;
    cin >> luku;
   
    while (luku < 1 || luku > 9) {
    cout << "Väärin luku: luku pitää olla väliltä 1-9." << endl;
    cout << "Syötä luku." << endl;
    cin >> luku;
    }
        if (luku == 1) {
            cout << luku1 << endl;
        }

        if (luku == 2) {
            cout << luku1 << endl;
            cout << luku2 << endl;
        }

        if (luku == 3) {
            cout << luku1 << endl;
            cout << luku2 << endl;
            cout << luku3 << endl;
        }

        if (luku == 4) {
            cout << luku1 << endl;
            cout << luku2 << endl;
            cout << luku3 << endl;
            cout << luku4 << endl;
        }

        if (luku == 5) {
            cout << luku1 << endl;
            cout << luku2 << endl;
            cout << luku3 << endl;
            cout << luku4 << endl;
            cout << luku5 << endl;
        }

        if (luku == 6) {
            cout << luku1 << endl;
            cout << luku2 << endl;
            cout << luku3 << endl;
            cout << luku4 << endl;
            cout << luku5 << endl;
            cout << luku6 << endl;
        }

        if (luku == 7) {
            cout << luku1 << endl;
            cout << luku2 << endl;
            cout << luku3 << endl;
            cout << luku4 << endl;
            cout << luku5 << endl;
            cout << luku6 << endl;
            cout << luku7 << endl;
        }

        if (luku == 8) {
            cout << luku1 << endl;
            cout << luku2 << endl;
            cout << luku3 << endl;
            cout << luku4 << endl;
            cout << luku5 << endl;
            cout << luku6 << endl;
            cout << luku7 << endl;
            cout << luku8 << endl;
        }

        if (luku == 9) {
            cout << luku1 << endl;
            cout << luku2 << endl;
            cout << luku3 << endl;
            cout << luku4 << endl;
            cout << luku5 << endl;
            cout << luku6 << endl;
            cout << luku7 << endl;
            cout << luku8 << endl;
            cout << luku9 << endl;
        }
}