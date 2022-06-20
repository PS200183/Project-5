using System;
using System.Collections.Generic;
using System.IO;
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
using Microsoft.Win32;
using summamove.Models;

namespace summamove
{
    /// <summary>
    /// Interaction logic for OefeningensToevoegen.xaml
    /// </summary>
    public partial class OefeningensToevoegen : Window
    {
        public OefeningensToevoegen()
        {
            InitializeComponent();
        }
        byte[] foto;
        SummaMoveDB dB = new SummaMoveDB();

        private void BTToevoegen_Click(object sender, RoutedEventArgs e)
        {
            if ((string.IsNullOrEmpty(TBNaam.Text)) || (string.IsNullOrEmpty(TBBeschrijving.Text)))
            {
                MessageBox.Show("Graag gegevens invoeren");
            }
            else
            {
                try
                {


                    if (!dB.InsertOefeningens(TBNaam.Text, TBBeschrijving.Text, foto))
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

        private void Selectpicture_Click(object sender, RoutedEventArgs e)
        {
            OpenFileDialog op = new OpenFileDialog();
            op.Title = "Select a picture";
            op.Filter = "All supported graphics|*.jpg;*.jpeg;*.png|" +
                "JPEG (*.jpg;*.jpeg)|*.jpg;*.jpeg|" +
                "Portable Network Graphic (*.png)|*.png";

            if (op.ShowDialog() == true)
            {
                Foto.Source = new BitmapImage(new Uri(op.FileName));
                foto = File.ReadAllBytes(op.FileName);
              
            }
        }
    }
}
