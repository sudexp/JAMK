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
    
    cout << "Syötä kokonaisluku väliltä 1-9." << endl;
    cin >> luku;
   
    while (luku < 1 || luku > 9) {
        cout << "Väärin luku: luku pitää olla väliltä 1-9." << endl;
        cout << "Syötä luku." << endl;
        cin >> luku;
    }
    // Kaksi toimivaa vaihtoehtoa.
    // Ensimmäinen "while" vaihtoehto:
    int i=1;
    while (i <= luku) {
        int j = 1;
        while (j <= i) {
            cout << i;
            j++;
        }
        cout << endl;
        i++;
	}
    
    /* Toinen "for" vaihtoehto:
    int i;
    for (i = 1; i <= luku; i++) {
        int j;
        for (j = 1; j <= i; j++) {
            cout << i;
        }
        cout << endl;
    } */
    return 0; 
}