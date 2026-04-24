using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace PassportAPI.Migrations
{
    /// <inheritdoc />
    public partial class init : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Passport",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    HolderName = table.Column<string>(type: "nvarchar(30)", maxLength: 30, nullable: false),
                    PassportNumber = table.Column<string>(type: "nvarchar(10)", maxLength: 10, nullable: false),
                    ExpiryDate = table.Column<string>(type: "nvarchar(5)", maxLength: 5, nullable: false),
                    PPOCode = table.Column<string>(type: "nvarchar(6)", maxLength: 6, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Passport", x => x.Id);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Passport");
        }
    }
}
