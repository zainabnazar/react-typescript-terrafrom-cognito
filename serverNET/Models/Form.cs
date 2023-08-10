using Microsoft.AspNetCore.Identity;

namespace serverNET.Models
{
    public class Form
    {
        public int Id { get; set; }
        public string? First { get; set; } // Add '?' after the type to make it nullable
        public string? Last { get; set; }
    }
}