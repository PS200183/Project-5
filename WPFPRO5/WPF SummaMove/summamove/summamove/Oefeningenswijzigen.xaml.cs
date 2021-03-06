using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
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
    /// Interaction logic for Oefeningenswijzigen.xaml
    /// </summary>
    public partial class Oefeningenswijzigen : Window
    {
        int id = 0;
        byte[] foto;

        private ObservableCollection<Oefeningens> oefeningen = new ObservableCollection<Oefeningens>();
        public ObservableCollection<Oefeningens> Oefeningens
        {
            get { return oefeningen; }
            set { oefeningen = value; }
        }
        SummaMoveDB dB = new SummaMoveDB();
        public Oefeningenswijzigen(int ID)
        {
            InitializeComponent();
            id = id + ID;
            LoadData();

            DataContext = this;
        }
        private void LoadData()
        {
            if (dB.getOefeningenBYID(id) == null)
            {
                MessageBox.Show("Er is een fout opgetrijden tijdens het data ophallen", "", MessageBoxButton.OK, MessageBoxImage.Error);

            }
            else
            {

                Oefeningens oefeningen = dB.getOefeningenBYID(id);
                Oefeningens.Clear();                    // Maak Observable Collection eerst leeg
                Oefeningens.Add(oefeningen);
                TBNaam.Text = oefeningen.Naam;
                TBBeschrijving.Text = oefeningen.Beschrijving;
                //foto = oefeningen.Foto;
                TBFoto.Text = oefeningen.Foto;




            }

        }

        private void BTOpslaan_Click(object sender, RoutedEventArgs e)
        {
            try
            {
                if (!dB.UpdateOefeningens(id, TBNaam.Text, TBBeschrijving.Text, TBFoto.Text))
                {
                    MessageBox.Show("Er is een fout bij het update");
                    return;
                }
                this.Close();
            }
            catch
            {
                MessageBox.Show("Er is een fout bij het update");
            }
        }

        private void TBFoto_TextChanged(object sender, TextChangedEventArgs e)
        {
            try
            {
                //Oefeningens.Foto = new BitmapImage(new Uri(TBFoto.Text));
                Foto.Source = new BitmapImage(new Uri(TBFoto.Text));
            }
            catch (Exception)
            {

            }
        }
    }
}
