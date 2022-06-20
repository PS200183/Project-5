using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Shapes;
using summamove.Models;
namespace summamove
{
    /// <summary>
    /// Interaction logic for GebruikerToevoegen.xaml
    /// </summary>
    public partial class GebruikerToevoegen : Window
    {
        public GebruikerToevoegen()
        {
            InitializeComponent();
        }
        private string Salt;
        private string hash;

        SummaMoveDB dB = new SummaMoveDB();

        private void BTToevoegen_Click(object sender, RoutedEventArgs e)
        {
            if ((string.IsNullOrEmpty(TBName.Text)) || (string.IsNullOrEmpty(TBEmail.Text)) || (string.IsNullOrEmpty(TBPassword.Password)))
            {
                MessageBox.Show("Graag gegevens invoeren");
            }
            else
            {
                try
                {
                    Salt = BCrypt.Net.BCrypt.GenerateSalt();
                    hash = BCrypt.Net.BCrypt.HashPassword(TBPassword.Password, Salt);
                    

                    string password = hash.Substring(4, hash.Length - 4);

                    if (!dB.InsertGebruiker(TBName.Text, TBEmail.Text, "$2y$" + password))
                    {
                        MessageBox.Show("Er is een fout bij het toevoegen");
                        return;
                    }
                    this.Close();
                }
                catch
                {
                    MessageBox.Show("Graag getal invoeren bij prijs");

                }

            }
        }
    }
}
