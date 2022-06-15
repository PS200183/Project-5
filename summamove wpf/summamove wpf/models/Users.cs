using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace summamove_wpf.models
{
    public class Users
    {
        public int id { get; set; }
        public string name { get; set; }
        public string email { get; set; }
        public string password { get; set; }
        public int user_id { get; set; }
        public int rol_id { get; set; }
        public string rol { get; set; }
    }
}
