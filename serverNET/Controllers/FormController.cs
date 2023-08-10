// using Microsoft.AspNetCore.Mvc;
// using Microsoft.EntityFrameworkCore;
// using serverNET.Data;
// using serverNET.Models;
// using System.Collections.Generic;
// using System.Threading.Tasks;

// namespace serverNET.Controllers
// {
//     [ApiController]
//     [Route("api/[controller]")]
//     public class FormController : ControllerBase
//     {
//         private static readonly List<Form> _forms = new List<Form>
//         {
//             new Form { Id = 1, First = "Zainab", Last = "Noori" },
//         };

//         [HttpGet]
//         public ActionResult<IEnumerable<Form>> Get()
//         {
//             return Ok(_forms);
//         }

//         [HttpGet("{id}")]
//         public ActionResult<Form> GetById(int id)
//         {
//             var form = _forms.Find(item => item.Id == id);
//             if (form == null)
//             {
//                 return NotFound();
//             }
//             return Ok(form);
//         }

//         [HttpPost]
//         public ActionResult<Form> Create(Form formData)
//         {
//             // You can add validation or processing logic here
//             _forms.Add(formData);
//             return CreatedAtAction(nameof(GetById), new { id = formData.Id }, formData);
//         }
//     }
// }

using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using serverNET.Data;
using serverNET.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace serverNET.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class FormController : ControllerBase
    {
        private readonly MyDbContext _dbContext;

        public FormController(MyDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Form>>> Get()
        {
            var forms = await _dbContext.Forms.ToListAsync();
            return Ok(forms);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Form>> GetById(int id)
        {
            var form = await _dbContext.Forms.FindAsync(id);
            if (form == null)
            {
                return NotFound();
            }
            return Ok(form);
        }

        [HttpPost]
        public async Task<ActionResult<Form>> Create(Form formData)
        {
            if (ModelState.IsValid)
            {
                _dbContext.Forms.Add(formData);
                await _dbContext.SaveChangesAsync();
                return CreatedAtAction(nameof(GetById), new { id = formData.Id }, formData);
            }
            return BadRequest(ModelState);
        }
    }
}
