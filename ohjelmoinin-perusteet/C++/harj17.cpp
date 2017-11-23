/******************************************
 Teht�v�: Harjoitus 17 (Palautus vko 46)
 Tekija: Sklyarov Dmitry
 Kuvaus:
 Harjoitus 17 (Palautus vko 46)
 Muokkaa edellist� ohjelmaa siten, ett� edell� m��ritelty� tietuetyyppi�
 k�ytet��n my�s kahden muun "koululaisen" tietojen tallentamiseen.
 N�iden kahden muun koululaisen tiedot alustetaan ao. muuttujien
 m��rittelyn yhteydess�. Ainoastaan yhden koululaisen tiedot kysyt��n
 k�ytt�j�lt� edellisen teht�v�n tapaan.
 
 Tulosta kolmen koululaisen tiedot koulumatkan mukaisessa
 suuruusj�rjestyksess� (pienimm�st� suurimpaan) n�yt�lle
 
 Pvm: 23.11.2017
 Versio: 2.0
 ******************************************/

#include <iostream>
using namespace std;
int main()
{
    struct koululainen {
        char etunimi[30];
        char sukunimi[30];
        char osoite[40];
        int postinumero;
        int kengannumero;
        float koulumatka;
    };
    
    koululainen henkilo[3], tmp;
    for (int i = 0; i <= 2; i++)
    {
        cout << "Anna etunimi: " << endl;
        cin.get(henkilo[i].etunimi, 30);
        cin.get();
        cout << "Anna sukunimi: " << endl;
        cin.get(henkilo[i].sukunimi, 30);
        cin.get();
        cout << "Anna koulumatka: " << endl;
        cin >> henkilo[i].koulumatka;
        cin.get();
        cout << "Anna osoite: " << endl;
        cin.get(henkilo[i].osoite, 40);
        cin.get();
        cout << "Anna postinumero: " << endl;
        cin >> henkilo[i].postinumero;
        cin.get();
        cout << "Anna kengannumero: " << endl;
        cin >> henkilo[i].kengannumero;
        cin.get();
    }
    cout << endl;
    
    for (int i = 0; i <= 1; i++)
    {
        for (int j = i + 1; j <= 2; j++)
        {
            if (henkilo[j].koulumatka < henkilo[i].koulumatka)
            {
                tmp = henkilo[i];
                henkilo[i] = henkilo[j];
                henkilo[j] = tmp;
            }
        }
    }
    
    for (int i = 0; i <= 2; i++)
    {
        cout << henkilo[i].etunimi << ' ' << henkilo[i].sukunimi << endl << henkilo[i].koulumatka << endl << henkilo[i].osoite << endl << henkilo[i].postinumero << endl << henkilo[i].kengannumero << endl;
    }
}
