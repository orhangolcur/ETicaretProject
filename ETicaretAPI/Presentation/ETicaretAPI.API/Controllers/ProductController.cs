using ETicaretAPI.Application.Repositories;
using ETicaretAPI.Domain.Entities;
using Microsoft.AspNetCore.Mvc;

namespace ETicaretAPI.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        readonly private IProductReadRepository _productReadRepository;
        readonly private IProductWriteRepository _productWriteRepository;

        readonly private IOrderWriteRepository _orderWriteRepository;

        readonly private ICustomerWriteRepository _customerWriteRepository;
        public ProductController(
            IProductWriteRepository productWriteRepository,
            IProductReadRepository productReadRepository,
            IOrderWriteRepository orderWriteRepository,
            ICustomerWriteRepository customerWriteRepository
           )
        {
            _productWriteRepository = productWriteRepository;
            _productReadRepository = productReadRepository;
            _orderWriteRepository = orderWriteRepository;
            _customerWriteRepository = customerWriteRepository;
        }


        [HttpGet]
        public async Task Get()
        {
            /*
            await _productWriteRepository.AddRangeAsync(new()
            {
                new() { Id = Guid.NewGuid(), Name = "Product 1", Price = 100, Stock = 10 },
                new() { Id = Guid.NewGuid(), Name = "Product 2", Price = 200, Stock = 20 },
                new() { Id = Guid.NewGuid(), Name = "Product 3", Price = 300, Stock = 30 }
            });
            await _productWriteRepository.SaveAsync();
            */
            /*
            Product p = await _productReadRepository.GetByIdAsync("3505689c-51f3-455f-9298-f39116e950bc", false);
            p.Name = "İrfan";
            await _productWriteRepository.SaveAsync();
            */

            /*
            await _productWriteRepository.AddAsync(new() { Name = "Bilgisayar", Price = 1.500F, Stock = 20, CreatedDate = DateTime.UtcNow });
            await _productWriteRepository.SaveAsync();
            */

            var customerId = Guid.NewGuid();
            await _customerWriteRepository.AddAsync(new()
            {
                Id = customerId,
                Name = "İrfan",
            });

            await _orderWriteRepository.AddAsync(new()
            {
                Description = "Sipariş Açıklaması",
                Address = "Sipariş Adresi",
                CustomerId = customerId,
            });
            await _orderWriteRepository.AddAsync(new()
            {
                Description = "Sipariş Açıklaması 2",
                Address = "Sipariş Adresi 2",
                CustomerId = customerId,
            });
            await _orderWriteRepository.SaveAsync();

        }

        [HttpGet("{id}")]
        public async Task<IActionResult> Get(string id)
        {
            Product product = await _productReadRepository.GetByIdAsync(id);
            return Ok(product);
        }

    }
}
