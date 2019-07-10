cat > ./sequelize/seeders/$(date +"%Y%m%d%H%M%S")-$1.ts << EOF
import { QueryInterface } from 'sequelize';

module.exports = {
  up: async (queryInterface: QueryInterface) => {
  },

  down: async (queryInterface: QueryInterface) => {
  },
};
EOF