using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Grocery_List_Builder.Controllers
{
    public class GroceryListController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
