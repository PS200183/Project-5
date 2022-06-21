using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Configuration;
using MySql.Data.MySqlClient;
using System.Data;

namespace summamove.Models
{
   public class SummaMoveDB
    {
        private MySqlConnection conn
            = new MySqlConnection(ConfigurationManager.ConnectionStrings["SummamoveCS"]
                .ConnectionString);

        public List<Users> GetAlleGebruikers()
        {
            List<Users> users = new List<Users>();
            try
            {
                conn.Open();
                MySqlCommand sql = conn.CreateCommand();
                //sql.CommandText = "SELECT users.id, users.name, users.email , users.password , user_roles.user_id , user_roles.role_id , roles.name FROM users INNER JOIN user_roles on user_roles.user_id = users.id INNER JOIN roles ON roles.id = user_roles.role_id";
                sql.CommandText = "SELECT * FROM users";
                MySqlDataReader reader = sql.ExecuteReader();
                DataTable table = new DataTable();
                table.Load(reader);

                foreach (DataRow row in table.Rows)
                {
                    Users comet = new Users();
                    comet.ID = (int)row["id"];
                    comet.Name = (string)row["name"];
                    comet.Email = (string)row["email"];


                    users.Add(comet);
                }
            }
            catch (Exception e)
            {

                Console.Error.WriteLine(e.Message);
                return null;

            }
            finally
            {
                if (conn.State == ConnectionState.Open)
                {
                    conn.Close();
                }
            }
            return users;
        }

        public bool InsertGebruiker(string Name, string Email, string Password)
        {
            bool result = false;
            try
            {
                conn.Open();
                MySqlCommand sql = conn.CreateCommand();
                sql.CommandText =
                    "INSERT INTO users( name , email , password )" +
                    " VALUES(@Name, @Email , @Password)";
                sql.Parameters.AddWithValue("@Name", Name);
                sql.Parameters.AddWithValue("@Email", Email);
                sql.Parameters.AddWithValue("@Password", Password);

                result = sql.ExecuteNonQuery() == 1;
            }
            catch (Exception e)
            {
                Console.Error.WriteLine(e.Message);
                return false;
            }
            finally
            {
                if (conn.State == ConnectionState.Open)
                {
                    conn.Close();
                }
            }
            return result;
        }
       
        
        public bool DeleteGebruiker(int id)
        {
            bool result = false;
            try
            {
                conn.Open();
                MySqlCommand sql = conn.CreateCommand();
                sql.CommandText =
                    " DELETE FROM users WHERE  id = @ID";
                sql.Parameters.AddWithValue("@ID", id);

                result = sql.ExecuteNonQuery() == 1;
            }
            catch (Exception e)
            {
                Console.Error.WriteLine(e.Message);
                return false;
            }
            finally
            {
                if (conn.State == ConnectionState.Open)
                {
                    conn.Close();
                }
            }
            return result;
        }

        public bool UpdateGebruiker(int ID, string Name, string Email)
        {
            bool result = false;
            try
            {
                conn.Open();
                MySqlCommand sql = conn.CreateCommand();
                sql.CommandText = "UPDATE  users  SET  name = @name , email = @email   WHERE id  = @ID";
                sql.Parameters.AddWithValue("@ID", ID);
                sql.Parameters.AddWithValue("@name", Name);
                sql.Parameters.AddWithValue("@email", Email);
                result = sql.ExecuteNonQuery() == 1;
            }
            catch (Exception e)
            {
                Console.Error.WriteLine(e.Message);
                return false;
            }
            finally
            {
                if (conn.State == ConnectionState.Open)
                {
                    conn.Close();
                }
            }
            return result;
        }

        public Users getGebruikerBYID(int ID)
        {
            Users user = new Users();
            try
            {

                conn.Open();
                MySqlCommand sql = conn.CreateCommand();
                sql.CommandText = "SELECT * FROM users WHERE id = @ID ";
                sql.Parameters.AddWithValue("@ID", ID);
                MySqlDataReader reader = sql.ExecuteReader();
                DataTable table = new DataTable();
                table.Load(reader);

                foreach (DataRow row in table.Rows)
                {
                    user.ID = (int)row["id"];
                    user.Name = (string)row["name"];
                    user.Email = (string)row["Email"];
                }
            }
            catch (Exception e)
            {

                Console.Error.WriteLine(e.Message);
                return null;

            }
            finally
            {
                if (conn.State == ConnectionState.Open)
                {
                    conn.Close();
                }
            }
            return user;
        }


        public Oefeningens getOefeningenBYID(int ID)
        {
            Oefeningens oefeningen = new Oefeningens();
            try
            {

                conn.Open();
                MySqlCommand sql = conn.CreateCommand();
                sql.CommandText = "SELECT * FROM oefeningwpf WHERE id = @ID ";
                sql.Parameters.AddWithValue("@ID", ID);
                MySqlDataReader reader = sql.ExecuteReader();
                DataTable table = new DataTable();
                table.Load(reader);

                foreach (DataRow row in table.Rows)
                {
                    oefeningen.ID = (int)row["id"];
                    oefeningen.Naam = (string)row["naamoefening"];
                    oefeningen.Beschrijving = (string)row["beschrijving"];
                    oefeningen.Foto = (byte[])row["foto"];
                }
            }
            catch (Exception e)
            {

                Console.Error.WriteLine(e.Message);
                return null;

            }
            finally
            {
                if (conn.State == ConnectionState.Open)
                {
                    conn.Close();
                }
            }
            return oefeningen;
        }


        public List<Oefeningens> GetOefeningens()
        {
            List<Oefeningens> oefeningen = new List<Oefeningens>();
            try
            {
                conn.Open();
                MySqlCommand sql = conn.CreateCommand();
                sql.CommandText = "SELECT * FROM oefeningwpf";
                MySqlDataReader reader = sql.ExecuteReader();
                DataTable table = new DataTable();
                table.Load(reader);

                foreach (DataRow row in table.Rows)
                {
                    Oefeningens comet = new Oefeningens();
                    comet.ID = (int)row["id"];
                    comet.Naam = (string)row["naamoefening"];
                    comet.Beschrijving = (string)row["beschrijving"];
                    comet.Foto = (byte[])row["foto"];



                    oefeningen.Add(comet);
                }
            }
            catch (Exception e)
            {

                Console.Error.WriteLine(e.Message);
                return null;

            }
            finally
            {
                if (conn.State == ConnectionState.Open)
                {
                    conn.Close();
                }
            }
            return oefeningen;
        }

        public bool InsertOefeningens(string Naam, string Beschrijving, byte[] Foto)
        {
            bool result = false;
            try
            {
                conn.Open();
                MySqlCommand sql = conn.CreateCommand();
                sql.CommandText =
                    "INSERT INTO oefeningwpf( naamoefening , beschrijving , foto )" +
                    " VALUES(@Naam, @Beschrijving , @Foto)";
                sql.Parameters.AddWithValue("@Naam", Naam);
                sql.Parameters.AddWithValue("@Beschrijving", Beschrijving);
                sql.Parameters.AddWithValue("@Foto", Foto);

                result = sql.ExecuteNonQuery() == 1;
            }
            catch (Exception e)
            {
                Console.Error.WriteLine(e.Message);
                return false;
            }
            finally
            {
                if (conn.State == ConnectionState.Open)
                {
                    conn.Close();
                }
            }
            return result;
        }


        public bool UpdateOefeningens(int ID, string Naam, string Beschrijving, byte[] Foto)
        {
            bool result = false;
            try
            {
                conn.Open();
                MySqlCommand sql = conn.CreateCommand();
                sql.CommandText = "UPDATE  oefeningwpf  SET  naamoefening = @Naam , beschrijving = @Beschrijving , foto = @Foto  WHERE id  = @ID";
                sql.Parameters.AddWithValue("@ID", ID);
                sql.Parameters.AddWithValue("@naam", Naam);
                sql.Parameters.AddWithValue("@beschrijving", Beschrijving);
                sql.Parameters.AddWithValue("@foto", Foto);
                result = sql.ExecuteNonQuery() == 1;
            }
            catch (Exception e)
            {
                Console.Error.WriteLine(e.Message);
                return false;
            }
            finally
            {
                if (conn.State == ConnectionState.Open)
                {
                    conn.Close();
                }
            }
            return result;
        }
      
        public bool DeleteOefeningensById(int id)
        {
            bool result = false;
            try
            {
                conn.Open();
                MySqlCommand sql = conn.CreateCommand();
                sql.CommandText =
                    " DELETE FROM oefeningwpf WHERE  id = @ID";
                sql.Parameters.AddWithValue("@ID", id);

                result = sql.ExecuteNonQuery() == 1;
            }
            catch (Exception e)
            {
                Console.Error.WriteLine(e.Message);
                return false;
            }
            finally
            {
                if (conn.State == ConnectionState.Open)
                {
                    conn.Close();
                }
            }
            return result;
        }


    }
}
